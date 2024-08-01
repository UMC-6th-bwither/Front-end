/* eslint-disable react/prop-types */
import Badge from './Badge';

export default function BadgeVariant({ content }) {
  if (content === '강아지 전문') {
    return (
      <Badge
        backgroundColor="#EFF4FF"
        color="#2257DF"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="11"
            viewBox="0 0 12 11"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.66262 2.41821C5.66262 3.35842 5.09098 4.1206 4.38582 4.1206C3.68067 4.1206 3.10903 3.35842 3.10903 2.41821C3.10903 1.47801 3.68067 0.71582 4.38582 0.71582C5.09098 0.71582 5.66262 1.47801 5.66262 2.41821ZM6.01728 4.76633C8.81517 4.76633 10.8019 7.91222 10.0923 9.91955C9.90746 10.4423 9.42956 10.234 8.69676 9.91462C8.01436 9.61722 7.11092 9.22347 6.01728 9.23401C4.97131 9.24408 4.10229 9.63534 3.43164 9.93728C2.66487 10.2825 2.15741 10.511 1.94127 9.91955C1.12616 7.68918 3.21939 4.76633 6.01728 4.76633ZM7.61434 4.1206C8.31949 4.1206 8.89113 3.35842 8.89113 2.41821C8.89113 1.47801 8.31949 0.71582 7.61434 0.71582C6.90919 0.71582 6.33755 1.47801 6.33755 2.41821C6.33755 3.35842 6.90919 4.1206 7.61434 4.1206ZM2.59484 3.70058C3.09467 4.29626 3.12261 5.09571 2.65723 5.48621C2.19186 5.8767 1.4094 5.71037 0.909568 5.11469C0.409734 4.51901 0.381799 3.71956 0.847173 3.32906C1.31255 2.93857 2.095 3.1049 2.59484 3.70058ZM9.34278 5.48622C9.80815 5.87672 10.5906 5.71038 11.0904 5.11471C11.5903 4.51903 11.6182 3.71957 11.1528 3.32908C10.6875 2.93858 9.90501 3.10492 9.40517 3.7006C8.90534 4.29628 8.8774 5.09573 9.34278 5.48622Z"
              fill="#F87B45"
            />
          </svg>
        }
      >
        강아지 전문
      </Badge>
    );
  }
  if (content === '본인인증') {
    return (
      <Badge
        backgroundColor="#ECFAF1"
        color="#323232"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4 7.625L6.88 11L12 5"
              stroke="#2DC261"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      >
        본인인증
      </Badge>
    );
  }
  if (content === '사업자등록증') {
    return (
      <Badge
        backgroundColor="#ECFAF1"
        color="#323232"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4 7.625L6.88 11L12 5"
              stroke="#2DC261"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      >
        사업자등록증
      </Badge>
    );
  }
  if (content === '혜택') {
    return (
      <Badge
        backgroundColor="#FFF2F3"
        color="#FA5963"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.05743 3.70833C1.05743 3.14454 1.51448 2.6875 2.07827 2.6875H11.9209C12.4847 2.6875 12.9417 3.14454 12.9417 3.70833V5.02083H12.945V5.89583C11.8413 5.89583 11.0492 6.66712 11.0492 7.5C11.0492 8.33288 11.8413 9.10417 12.945 9.10417V9.97917H12.9417V11.2917C12.9417 11.8555 12.4847 12.3125 11.9209 12.3125H2.07827C1.51448 12.3125 1.05743 11.8555 1.05743 11.2917V9.98774H1.05469V9.11274C2.15843 9.11274 2.95052 8.34146 2.95052 7.50857C2.95052 6.67563 2.15843 5.9044 1.05469 5.9044V5.0294H1.05743V3.70833ZM5.63292 6.7118C6.11614 6.7118 6.5079 6.32005 6.5079 5.8368C6.5079 5.35355 6.11614 4.9618 5.63292 4.9618C5.14966 4.9618 4.75792 5.35355 4.75792 5.8368C4.75792 6.32005 5.14966 6.7118 5.63292 6.7118ZM8.97645 10.0553C9.45969 10.0553 9.85145 9.66358 9.85145 9.18035C9.85145 8.69706 9.45969 8.30535 8.97645 8.30535C8.49322 8.30535 8.10145 8.69706 8.10145 9.18035C8.10145 9.66358 8.49322 10.0553 8.97645 10.0553ZM5.16656 9.43194C4.9957 9.26114 4.9957 8.98412 5.16656 8.81326L8.60942 5.37036C8.78028 5.1995 9.0573 5.1995 9.22816 5.37036C9.39902 5.54121 9.39902 5.81823 9.22816 5.98908L5.78528 9.43194C5.61442 9.6028 5.33741 9.6028 5.16656 9.43194Z"
              fill="#FA5963"
            />
          </svg>
        }
      >
        혜택
      </Badge>
    );
  }
  return (
    <Badge
      backgroundColor="#FFF2F3"
      color="#FA5963"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.05743 3.70833C1.05743 3.14454 1.51448 2.6875 2.07827 2.6875H11.9209C12.4847 2.6875 12.9417 3.14454 12.9417 3.70833V5.02083H12.945V5.89583C11.8413 5.89583 11.0492 6.66712 11.0492 7.5C11.0492 8.33288 11.8413 9.10417 12.945 9.10417V9.97917H12.9417V11.2917C12.9417 11.8555 12.4847 12.3125 11.9209 12.3125H2.07827C1.51448 12.3125 1.05743 11.8555 1.05743 11.2917V9.98774H1.05469V9.11274C2.15843 9.11274 2.95052 8.34146 2.95052 7.50857C2.95052 6.67563 2.15843 5.9044 1.05469 5.9044V5.0294H1.05743V3.70833ZM5.63292 6.7118C6.11614 6.7118 6.5079 6.32005 6.5079 5.8368C6.5079 5.35355 6.11614 4.9618 5.63292 4.9618C5.14966 4.9618 4.75792 5.35355 4.75792 5.8368C4.75792 6.32005 5.14966 6.7118 5.63292 6.7118ZM8.97645 10.0553C9.45969 10.0553 9.85145 9.66358 9.85145 9.18035C9.85145 8.69706 9.45969 8.30535 8.97645 8.30535C8.49322 8.30535 8.10145 8.69706 8.10145 9.18035C8.10145 9.66358 8.49322 10.0553 8.97645 10.0553ZM5.16656 9.43194C4.9957 9.26114 4.9957 8.98412 5.16656 8.81326L8.60942 5.37036C8.78028 5.1995 9.0573 5.1995 9.22816 5.37036C9.39902 5.54121 9.39902 5.81823 9.22816 5.98908L5.78528 9.43194C5.61442 9.6028 5.33741 9.6028 5.16656 9.43194Z"
            fill="#FA5963"
          />
        </svg>
      }
    >
      일치하는 결과 없음
    </Badge>
  );
}
