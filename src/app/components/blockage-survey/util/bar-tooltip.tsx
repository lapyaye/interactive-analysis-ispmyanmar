export const BarTooltip = ({
                                  active,
                                  payload,
                              }: {
    active?: boolean
    payload?: any
}) => {
    const isVisible = active && payload && payload.length
    return (
        <div
            className="custom-tooltip"
            style={{ visibility: isVisible ? 'visible' : 'hidden' }}
        >
            {isVisible && (
                <>
                    <p className="label font-medium bg-gray-100 p-3 text-xs opacity-95">
                        {`${payload[0].payload.item} : `}
                        {
                            <span className={'font-bold'}>
                {payload[0].payload.percentage}%
              </span>
                        }
                    </p>
                </>
            )}
        </div>
    )
}