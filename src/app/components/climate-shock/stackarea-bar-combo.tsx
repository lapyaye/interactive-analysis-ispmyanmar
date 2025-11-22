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
  Bar,
  LabelList,
  Cell,
  BarChart,
  Legend,
} from 'recharts'
import { StackAreaData, StackBarData } from '@/library/climate-shock-data'
import { CustomTooltip } from '@/app/components/climate-shock/util/custom-tooltip'
import useIsMobile from '@/app/components/climate-shock/util/useIsMobile'
import { useState } from 'react'

export default function StackAreaBarComboApp({
  area,
  bar,
}: {
  area: StackAreaData
  bar: StackBarData
}) {
  const isMobile = useIsMobile()
  const [monthFilter, setMonthFilter] = useState('All')
  return (
    <div className="mb-10">
      <div className="mb-4">
        <span className="font-semibold text-sm inline-block bg-amber-200 p-1 rounded-lg">
          {area?.name}
        </span>
        <h3 className="font-semibold md:text-lg text-gray-700 my-3">
          {area.analysisTitle}
        </h3>
        <p className="text-gray-800 mb-4">{area.analysisPara}</p>
      </div>
      <div className={'p-4 border border-dashed border-gray-300'}>
        <h3 className="font-semibold text-base text-gray-700 my-2">
          {area?.title}
        </h3>
        <p className="text-gray-800 mb-4 text-sm">{area?.description}</p>
        <div className="h-[650] py-2 text-xs">
          <div className={'my-2 text-sm flex justify-end'}>
            <label className={'font-bold bg-gray-200 p-1 text-gray-600 mr-3'}>
              Month Filter:
            </label>
            <select
              className={'bg-blue-300 w-30 p-1 rounded-lg'}
              value={monthFilter}
              onChange={(e) => setMonthFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Mar">Mar 2024</option>
              <option value="Apr">Apr 2024</option>
              <option value="Jun">Jun 2024</option>
              <option value="Jul">Jul 2024</option>
              <option value="Aug">Aug 2024</option>
              <option value="Sep">Sep 2024</option>
              <option value="Oct">Oct 2024</option>
              <option value="Nov">Nov 2024</option>
              <option value="Dec">Dec 2024</option>
              <option value="Jan">Jan 2025</option>
              <option value="Feb">Feb 2025</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            {monthFilter === 'All' ? (
              <AreaChart
                data={area.data}
                margin={{
                  top: 25,
                  right: 10,
                  left: 0,
                  bottom: 25,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  className={'text-xs'}
                  style={{ fontSize: '12px' }}
                  padding={{ left: 30, right: 30 }}
                />
                {!isMobile && (
                  <YAxis className={'text-xs'}>
                    <Label
                      angle={-90}
                      value={'Townships'}
                      position="insideLeft"
                      style={{
                        textAnchor: 'middle',
                        fontWeight: 'bold',
                        fontSize: '12px',
                      }}
                    />
                  </YAxis>
                )}
                <Tooltip
                  content={
                    <CustomTooltip
                      active={false}
                      payload={undefined}
                      label={''}
                    />
                  }
                />
                {!isMobile && <Legend wrapperStyle={{ fontSize: '12px' }} />}
                {area.dataKey.map((entry, index) => (
                  <Area
                    type="monotone"
                    dataKey={entry.key}
                    key={`area-${index}`}
                    stackId="1"
                    stroke={entry.color}
                    fill={entry.color}
                  />
                ))}
              </AreaChart>
            ) : (
              <BarChart
                // @ts-ignore
                layout={bar?.layout}
                data={bar?.data}
                margin={{
                  top: 25,
                  right: 10,
                  left: 0,
                  bottom: 25,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                {bar?.layout == 'horizontal' ? (
                  !isMobile && (
                    <XAxis
                      dataKey="name"
                      className={'text-xs font-bold'}
                      style={{ fontSize: '12px', fontWeight: 'bold' }}
                    />
                  )
                ) : (
                  <XAxis type="number" hide />
                )}
                {bar?.layout == 'vertical' ? (
                  <YAxis type="category" hide />
                ) : (
                  !isMobile && (
                    <YAxis
                      className={'text-xs'}
                      type="number"
                      style={{ fontSize: '12px' }}
                    >
                      <Label
                        angle={-90}
                        value={'Townships'}
                        position="insideLeft"
                        style={{
                          textAnchor: 'middle',
                          fontWeight: 'bold',
                          fontSize: '12px',
                        }}
                      />
                    </YAxis>
                  )
                )}
                <Tooltip
                  //@ts-ignore
                  content={<CustomTooltip />}
                  shared={monthFilter != 'All'}
                />
                <Bar
                  dataKey={monthFilter}
                  fill={'#ee8774'}
                  cursor="pointer"
                  barSize={70}
                >
                  {
                    <LabelList
                      dataKey={monthFilter}
                      position={'top'}
                      fill={'#000'}
                      fontSize={13}
                      fontWeight={'bold'}
                    />
                  }
                  {bar?.data?.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      cursor="pointer"
                      fill={entry.color}
                    />
                  ))}
                </Bar>
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
        <div className={'mt-5'}>
          <p className={'text-xs italic text-gray-700'}>
            There was no severe climate disasters in the period: Dec 2024 - Feb
            2025. Duplicate counts occur where townships faced several
            challenges at the same time.
          </p>
        </div>
      </div>
    </div>
  )
}
