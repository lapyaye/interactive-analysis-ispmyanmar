'use client'
import {
  Cell,
  Legend,
  Pie,
  PieChart,
} from 'recharts'
import { SurveyData } from '@/library/blockage-data'
import React from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import {
    CustomPieLegend,
    renderActiveShape,
    renderCustomizedLabel
} from "@/app/components/blockage-survey/util/pie-utilities";

function PieChartApp({ props }: { props: SurveyData }) {

  const { question, payload, note, id } = props
  return (
    <div>
      <div className={'font-bold text-sm'}>
        <h3 className={'p-3 bg-gray-200 flex items-center justify-between'}>
          {question}
          {note ? (
            <>
              <IoMdInformationCircleOutline
                data-tooltip-id="pie-tooltip"
                className="w-4 h-4 shrink-0"
              />
              <ReactTooltip style={{ fontWeight: 500 }} id="pie-tooltip">
                The data reflect conditions during the 60 days leading up to
                September 23, 2025.
              </ReactTooltip>
            </>
          ) : null}
        </h3>
      </div>
      <PieChart
        responsive
        className={'h-[530] border border-dotted border-t-0 border-gray-300'}
      >
        <Legend
          wrapperStyle={{
            fontSize: '13px',
            marginLeft: '20px',
            marginBottom: '10px',
          }}
          content={<CustomPieLegend />}
        />
        <Pie
          activeShape={renderActiveShape}
          data={payload}
          cx="50%"
          cy="50%"
          innerRadius={id === 100 ? 80 : 90}
          outerRadius={id === 100 ? 115 : 135}
          fill="#8884d8"
          dataKey="percentage"
          isAnimationActive={true}
          labelLine={false}
          label={renderCustomizedLabel}
          className={'cursor-pointer'}
        >
          {payload?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  )
}

export default React.memo(PieChartApp)