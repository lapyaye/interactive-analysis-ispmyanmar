import React from 'react'

export const RedSquareIcon = React.memo(function SquareIcon({
  width = '10',
  height = '10',
  color = 'red',
}: {
  width?: string
  height?: string
  color?: string
}) {
  return (
    <svg
      className={`w-[${width}] h-[${height}] mr-2 flex-shrink-0`}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill={color} />
    </svg>
  )
})
