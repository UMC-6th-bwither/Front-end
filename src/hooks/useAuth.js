import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const useAuth = () => {
  const auth = useSelector((state) => state.auth);

  // 메모
  return useMemo(
    () => ({
      isLoggedIn: auth.isLoggedIn,
      userId: auth.userId,
      username: auth.username,
      breederId: auth.breederId,
      token: auth.token,
      role: auth.role,
    }),
    [
      auth.isLoggedIn,
      auth.userId,
      auth.username,
      auth.breederId,
      auth.token,
      auth.role,
    ],
  );
};

export default useAuth;
