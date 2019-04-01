// Libraries
import React, {Component} from 'react'

// Components
import {FlexDirection, JustifyContent, AlignItems} from '../../Types'
import {ComponentSpacer} from '../../Utilities/ComponentSpacer/ComponentSpacer'

interface PassedProps {
  /** Elements to render to the right of the title */
  children?: JSX.Element[] | JSX.Element
  /** Title of Panel */
  title: string
}

interface DefaultProps {
  /** Test ID for Integration Tests */
  testID?: string
}

type Props = PassedProps & DefaultProps

export class PanelHeader extends Component<Props> {
  public static defaultProps: DefaultProps = {
    testID: 'panel--header',
  }

  public render() {
    const {children, title} = this.props

    return (
      <div className="panel--header">
        <div className="panel--title">{title}</div>
        <div className="panel--controls">
          <ComponentSpacer
            direction={FlexDirection.Row}
            justifyContent={JustifyContent.FlexEnd}
            alignItems={AlignItems.Center}
          >
            {children}
          </ComponentSpacer>
        </div>
      </div>
    )
  }
}