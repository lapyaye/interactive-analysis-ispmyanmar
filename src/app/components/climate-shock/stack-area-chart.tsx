'use client'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from 'recharts'
import { StackAreaData } from '@/library/climate-shock-data'
import { CustomTooltip } from '@/app/components/climate-shock/util/custom-tooltip'
import useIsMobile from '@/app/components/climate-shock/util/useIsMobile'

export default function StackAreaChartApp({
  payload,
}: {
  payload: StackAreaData
}) {
  const isMobile = useIsMobile()
  return (
    <div className="my-10">
      <div className="mb-4">
        <span className="font-semibold text-sm inline-block bg-amber-200 p-1 rounded-lg">
          {payload?.name}
        </span>
        <h3 className="font-semibold text-md md:text-lg text-gray-700 my-3">
          {payload?.title}
        </h3>
        <p>{payload?.description}</p>
      </div>
      <div className="h-[550] py-3 border-y border-gray-300">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={450}
            data={payload.data}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              className={'text-xs'}
              padding={{ left: 30, right: 30 }}
            />
            {!isMobile && (
              <YAxis className={'text-xs'}>
                <Label
                  angle={-90}
                  value={'Townships'}
                  position="insideLeft"
                  style={{ textAnchor: 'middle', fontWeight: 'bold' }}
                />
              </YAxis>
            )}
            <Tooltip
              content={
                <CustomTooltip active={false} payload={undefined} label={''} />
              }
            />
            <Area
              type="monotone"
              dataKey="Agricultural Damages"
              stackId="1"
              stroke="#3295A5"
              fill="#3295A5"
            />
            <Area
              type="monotone"
              dataKey="Transportation Difficulties"
              stackId="1"
              stroke="#F58735"
              fill="#F58735"
            />
            <Area
              type="monotone"
              dataKey="Livelihood Difficulties"
              stackId="1"
              stroke="#DC5848"
              fill="#DC5848"
            />
            <Area
              type="monotone"
              dataKey="Loss of Livestock"
              stackId="1"
              stroke="#FBB458"
              fill="#FBB458"
            />
            <Area
              type="monotone"
              dataKey="Insufficient Civic Services"
              stackId="1"
              stroke="#A1BB79"
              fill="#A1BB79"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
