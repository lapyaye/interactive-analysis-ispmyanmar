'use client'
import { StackBarData } from '@/library/climate-shock-data'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Label,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import useIsMobile from '@/app/components/climate-shock/util/useIsMobile'
import { useState } from 'react'

const CustomTooltip = ({
  active,
  payload,
}: {
  active: boolean
  payload: any
}) => {
  const isVisible = active && payload && payload.length
  const hoveredSegment = payload[0]
  return (
    <div
      className="custom-tooltip"
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
    >
      {isVisible && (
        <div className="label bg-gray-100 p-3 text-sm opacity-95">
          <p className="font-bold mb-2">{`${payload[0].payload.name}`}</p>
          <p className={' mb-1'}>
            {`${hoveredSegment.name}:`}{' '}
            {
              <span style={{ color: hoveredSegment.color, fontWeight: 'bold' }}>
                {hoveredSegment.value}
              </span>
            }
          </p>
          <p className={'mt-2 text-xs font-bold'}>
            <svg
              width="20"
              height="20"
              style={{ cursor: 'pointer', display: 'inline-block' }}
            >
              <rect x="3" y="3" width="10" height="10" fill="red"></rect>
            </svg>{' '}
            Townships
          </p>
        </div>
      )}
    </div>
  )
}

export default function StackBarChartApp({
  payload,
}: {
  payload: StackBarData
}) {
  const isMobile = useIsMobile()
  const [monthFilter, setMonthFilter] = useState('All')
  return (
    <div className="my-10">
      <div className="mb-4">
        <span className="font-semibold text-sm inline-block bg-amber-200 p-1 rounded-lg">
          {payload?.name}
        </span>
        <h3 className="font-semibold md:text-lg text-gray-700 my-3">
          {payload.analysisTitle}
        </h3>
        <p className="text-gray-800 mb-4">{payload.analysisPara}</p>
      </div>
      <div className={'p-4 border border-dashed border-gray-300'}>
        <h3 className="font-semibold text-base text-gray-700 my-2">
          {payload?.title}
        </h3>
        <p className="text-gray-800 mb-4 text-sm">{payload?.description}</p>
        <div className="h-[650] py-2">
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
          <ResponsiveContainer>
            <BarChart
              // @ts-ignore
              layout={payload?.layout}
              width={500}
              height={450}
              data={payload?.data}
              margin={{
                top: 25,
                right: 10,
                left: 0,
                bottom: 25,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              {payload?.layout == 'horizontal' ? (
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
              {payload?.layout == 'vertical' ? (
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
                content={<CustomTooltip active={false} payload={undefined} />}
                shared={monthFilter != 'All'}
              />
              {monthFilter === 'All' ? (
                <>
                  <Bar
                    dataKey="Mar"
                    fill={'#5e92cd'}
                    stackId="1"
                    cursor="pointer"
                    barSize={70}
                  ></Bar>
                  <Bar
                    dataKey="Apr"
                    fill={'#a3caed'}
                    stackId="1"
                    cursor="pointer"
                    barSize={70}
                  ></Bar>
                  <Bar
                    dataKey="May"
                    fill={'#7ab399'}
                    stackId="1"
                    cursor="pointer"
                    barSize={70}
                  ></Bar>
                  <Bar
                    dataKey="Jun"
                    fill={'#b5c4a6'}
                    stackId="1"
                    cursor="pointer"
                    barSize={70}
                  ></Bar>
                  <Bar
                    dataKey="Jul"
                    fill={'#eeb990'}
                    stackId="1"
                    cursor="pointer"
                    barSize={70}
                  ></Bar>
                  <Bar
                    dataKey="Aug"
                    fill={'#ee8774'}
                    stackId="1"
                    cursor="pointer"
                    barSize={70}
                  ></Bar>
                  <Bar
                    dataKey="Sep"
                    fill={'#dd83af'}
                    stackId="1"
                    cursor="pointer"
                    barSize={70}
                  ></Bar>
                  <Bar
                    dataKey="Oct"
                    fill={'#9e93c6'}
                    stackId="1"
                    cursor="pointer"
                    barSize={70}
                  ></Bar>
                  <Bar
                    dataKey="Nov"
                    fill={'#cbbba0'}
                    stackId="1"
                    cursor="pointer"
                    barSize={70}
                  ></Bar>
                  <Bar
                    dataKey="Dec"
                    fill={'#7b6a58'}
                    stackId="1"
                    cursor="pointer"
                    barSize={70}
                  ></Bar>
                  <Bar
                    dataKey="Jan"
                    fill={'#3295A5'}
                    stackId="1"
                    cursor="pointer"
                    barSize={70}
                  ></Bar>
                  <Bar
                    dataKey="Feb"
                    fill={'#3295A5'}
                    stackId="1"
                    cursor="pointer"
                    barSize={70}
                  ></Bar>
                </>
              ) : (
                // <Bar dataKey={monthFilter} fill={payload?.data[0].color} cursor="pointer" barSize={70}>
                //     <LabelList dataKey={monthFilter} position="top" fill={"#000"} fontSize={13} fontWeight="bold" />
                // </Bar>
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
                  {payload?.data?.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      cursor="pointer"
                      fill={entry.color}
                    />
                  ))}
                </Bar>
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className={'mt-9'}>
          <p className={'text-xs italic text-gray-700'}>
            There was no severe climate disasters in the period: Dec 2024 - Feb
            2025. Duplicate counts occur where townships received assistance
            from multiple organizations.
          </p>
        </div>
      </div>
    </div>
  )
}
