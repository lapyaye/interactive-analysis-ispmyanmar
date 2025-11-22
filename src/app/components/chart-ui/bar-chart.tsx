'use client'
import { SurveyData } from '@/library/blockage-data'
import { Bar, BarChart, Cell, LabelList, Tooltip, XAxis, YAxis } from 'recharts'
import useIsMobile from '@/app/components/blockage-survey/util/use-mobile'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { CustomLabel } from '@/app/components/blockage-survey/util/custom-label'
import React from "react";
import {BarTooltip} from "@/app/components/blockage-survey/util/bar-tooltip";

function BarChartApp({ props }: { props: SurveyData }) {
  const { id, question, layout, payload } = props
  const isMobile = useIsMobile()

  return (
    <div>
      <div className={'font-bold text-sm'}>
        <h3 className={'p-3 bg-gray-200 flex items-center justify-between'}>
          {question}
          <IoMdInformationCircleOutline
            data-tooltip-id="bar-tooltip"
            className="w-4 h-4 shrink-0"
          />
          <ReactTooltip style={{ fontWeight: 500 }} id="bar-tooltip">
            The data reflect conditions during the 60 days leading up to
            September 23, 2025. <br /> This question allows multiple selections.
          </ReactTooltip>
        </h3>
      </div>
      <div
        className={`w-full ${id ? 'h-[200]' : 'h-[550]'} ${id ? 'xl:h-[250]' : 'xl:h-[580]'} ${id ? '2xl:h-[250]' : '2xl:h-[600]'} border border-dotted border-t-0 border-gray-300`}
      >
        <BarChart
          style={{ width: '100%', height: '100%' }}
          responsive
          layout={layout}
          data={payload}
          margin={{
            top: 20,
            right: isMobile ? 20 : 20,
            left: isMobile ? 10 : 0,
            bottom: 5,
          }}
        >
          {layout == 'horizontal' ? null : <XAxis type="number" hide />}
          {layout == 'vertical' ? (
            <YAxis
              type="category"
              dataKey="item"
              width={250}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fontWeight: 600 }}
              hide={isMobile}
            />
          ) : null}
          <Tooltip
            content={<BarTooltip/>}
            cursor={{ fill: 'rgba(227,227,227,0.68)' }}
          />
          <Bar dataKey="count" fill="#8884d8" barSize={35}>
            {
              //@ts-ignore
              <LabelList
                dataKey="count"
                content={<CustomLabel layout={layout} />}
              />
            }
            {payload?.map((entry, index) => {
              return (
                <Cell
                  key={`cell-${index}`}
                  cursor="pointer"
                  fill={entry.color}
                />
              )
            })}
          </Bar>
        </BarChart>
      </div>
    </div>
  )
}

export default React.memo(BarChartApp)