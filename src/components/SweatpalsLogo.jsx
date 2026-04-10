export default function SweatpalsLogo({ className = "w-8 h-8", color = "currentColor" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 8c-3 0-5.5 1-7.5 3L8 15.5c-2 2-3 4.5-3 7.5s1 5.5 3 7.5c2 2 4.5 3 7 3 2 0 3.8-.6 5.5-1.8L25 28c1.5-1.2 2.5-2.8 3-4.7.5-2 .3-3.8-.5-5.5l-1.5-3c-.8-1.5-2-2.7-3.5-3.5C21.5 8.5 20 8 20 8z"
        fill={color}
      />
      <path
        d="M28 6c-1.5 0-3 .5-4 1.5l-2 2c1.5.5 3 1.3 4 2.5l1.5 2c1 1.2 1.5 2.7 1.8 4.2.8-1 1.2-2.2 1.2-3.7 0-2.5-1-4.5-2.5-6.5-.5-.5-1-1-2-2z"
        fill={color}
      />
    </svg>
  )
}
