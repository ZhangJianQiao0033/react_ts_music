import React, { PureComponent } from 'react'
interface IProps {
  name: string
}

class Demo02 extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  render(): React.ReactNode {
    return <div>demo02</div>
  }
}

export default Demo02
