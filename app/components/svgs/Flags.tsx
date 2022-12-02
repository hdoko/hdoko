export const Spanish = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 70 44.8'
      className={className}
    >
      <path fill='#c60b1e' d='M.354 33.943h70v11.2h-70z' />
      <path fill='#ffc400' d='M.354 11.543h70v22.4h-70z' />
      <path fill='#c60b1e' d='M.354.343h70v11.2h-70z' />
    </svg>
  )
}

export const English = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0,0 25,15'
      className={className}
    >
      <rect width='25' height='15' fill='#00247d' />
      <path d='M 0,0 L 25,15 M 25,0 L 0,15' stroke='#fff' strokeWidth='3' />
      <path d='M 12.5,0 V 15 M 0,7.5 H 25' stroke='#fff' strokeWidth='5' />
      <path d='M 12.5,0 V 15 M 0,7.5 H 25' stroke='#cf142b' strokeWidth='3' />
    </svg>
  )
}
