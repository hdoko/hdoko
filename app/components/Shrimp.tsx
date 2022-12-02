import Link from 'next/link'

export const Shrimp = ({ className }: { className?: string }) => {
  return (
    <div className='absolute top-4 left-4 flex items-center'>
      <Link href='/'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          transform='scale(-1, 1)'
          className={className}
          shapeRendering='crispEdges'
        >
          <path
            fill='#ffbcab'
            d='M495.304 166.957h-33.391v-66.783h-33.391V66.783H395.13V33.391h-44.521V0H83.478v33.391H50.087v33.392H16.696v100.174h33.391v33.391h33.391v33.391h211.479v33.391h33.391v44.522H205.913v77.913h33.391v33.392h55.653V512h66.782v-33.391h33.391v-33.392h33.392v-66.782h33.391v-33.392h33.391z'
          />
          <path
            fill='#ff7956'
            d='M428.522 66.783H395.13V33.391h-44.521V0H217.043v66.783h33.392v100.174h-33.392v66.782h77.914v33.391h66.782v-33.391h33.391v-33.391h33.392z'
          />
          <path
            fill='#ff5023'
            d='M428.522 378.435h-66.783v-66.783H205.913v77.913h33.391v33.392h55.653V512h66.782v-33.391h33.391v-33.392h33.392z'
          />
          <path d='M83.478 0h267.13v33.391H83.478zM50.087 33.391h33.391v33.391H50.087zM16.696 66.783h33.391v100.174H16.696zm33.391 100.174h33.391v33.391H50.087zm33.391 33.391h211.478v33.391H83.478zm278.261 144.695V233.739h-66.782v33.391h33.391v44.522H205.913v77.913h33.391v-44.522zm-33.391 44.522h-89.044v33.392h55.653V512h66.782v-33.391h-33.391zm33.391 55.652h33.391v33.391h-33.391zm33.391-66.782h33.391v66.783H395.13zm33.392-33.392h33.391v33.391h-33.391zm33.391-178.086h33.391v178.087h-33.391zM350.609 33.391h44.522v33.391h-44.522zm44.521 33.392h33.391v33.391H395.13zm33.392 33.391h33.391v66.783h-33.391z' />
        </svg>
      </Link>
      <div className='font-pixel'>
        <p className='text-lg font-medium text-[#ff7956]'>Beta</p>
        <p className='relative -left-7 text-sm text-[#ff5023]'>v0.0.1</p>
      </div>
    </div>
  )
}
