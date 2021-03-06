// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentColor} from '../../Types'

export interface TableRowProps extends StandardFunctionProps {
  /** Controls coloration of the row, useful for showing a certain state */
  color?: ComponentColor
}

export type TableRowRef = HTMLTableRowElement

export const TableRow = forwardRef<TableRowRef, TableRowProps>(
  (
    {
      id,
      style,
      color = ComponentColor.Default,
      testID = 'table-row',
      children,
      className,
    },
    ref
  ) => {
    const tableRowClass = classnames('cf-table--row', {
      [`${className}`]: className,
      [`cf-table--row__${color}`]: color,
    })

    return (
      <tr
        id={id}
        ref={ref}
        style={style}
        className={tableRowClass}
        data-testid={testID}
      >
        {children}
      </tr>
    )
  }
)

TableRow.displayName = 'TableRow'
