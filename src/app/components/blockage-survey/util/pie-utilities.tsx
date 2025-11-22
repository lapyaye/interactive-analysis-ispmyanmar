import React from "react";
import {PieLabelRenderProps, Sector, SectorProps} from "recharts";

type Coordinate = {
    x: number
    y: number
}

type PieSectorData = {
    percent?: number
    name?: string | number
    midAngle?: number
    middleRadius?: number
    tooltipPosition?: Coordinate
    value?: number
    paddingAngle?: number
    dataKey?: string
    payload?: any
}

type PieSectorDataItem = React.SVGProps<SVGPathElement> &
    Partial<SectorProps> &
    PieSectorData

export const RADIAN = Math.PI / 180
export const renderCustomizedLabel = ({
                                               cx,
                                               cy,
                                               midAngle,
                                               innerRadius,
                                               outerRadius,
                                               value,
                                           }: PieLabelRenderProps) => {
    if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
        return null
    }
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const ncx = Number(cx)
    const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN)
    const ncy = Number(cy)
    const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN)

    return (
        <text
            x={x}
    y={y}
    className={'text-xs'}
    fill="white"
    textAnchor="middle"
    dominantBaseline="central"
    >
    {value >= 5 ? `${value}%` : ''}
    </text>
)
}

export const renderActiveShape = ({
                                           cx,
                                           cy,
                                           midAngle,
                                           innerRadius,
                                           outerRadius,
                                           startAngle,
                                           endAngle,
                                           fill,
                                           payload,
                                           value,
                                       }: PieSectorDataItem) => {
    const sin = Math.sin(-RADIAN * (midAngle ?? 1))
    const cos = Math.cos(-RADIAN * (midAngle ?? 1))
    const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos
    const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin
    const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos
    const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin
    const ex = mx + (cos >= 0 ? 1 : -1) * 22
    const ey = my
    const textAnchor = cos >= 0 ? 'start' : 'end'

    return (
        <g>
            <text
                x={cx}
    y={cy! - 8}
    dy={8}
    textAnchor="middle"
    fill={fill}
    className={'text-xs font-bold'}
        >
        {payload.label}
        </text>
        <text
    x={cx}
    y={cy! + 8}
    dy={8}
    textAnchor="middle"
    fill="#999"
    className={'text-xs font-medium'}
        >
        {`(Respondents: ${payload.count})`}
    </text>
    <Sector
    cx={cx}
    cy={cy}
    innerRadius={innerRadius}
    outerRadius={outerRadius}
    startAngle={startAngle}
    endAngle={endAngle}
    fill={fill}
    />
    <Sector
    cx={cx}
    cy={cy}
    startAngle={startAngle}
    endAngle={endAngle}
    innerRadius={(outerRadius ?? 0) + 8}
    outerRadius={(outerRadius ?? 0) + 10}
    fill={fill}
    />
    <path
    d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
    stroke={fill}
    fill="none"
    />
    <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
    <text
        x={ex + (cos >= 0 ? 1 : -1) * 5}
    y={ey + 5}
    textAnchor={textAnchor}
    fill="#333"
    className={'text-sm font-medium'}
        >{`${value} %`}</text>
    </g>
)
}

export const CustomPieLegend = ({ payload }: { payload?: any }) => {
    return (
        <ul>
            {payload.map((entry: any, index: number) => (
                <li key={`item-${index}`} className={'m-2 cursor-pointer'}>
          <span
              style={{
                  backgroundColor: entry.color,
              }}
              className={'inline-block w-[10] h-[10] rounded-full mr-2'}
          ></span>
                    {`${entry.payload.label}`}
                </li>
            ))}
        </ul>
    )
}