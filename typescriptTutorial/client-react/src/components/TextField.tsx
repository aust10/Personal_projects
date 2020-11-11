import React, {useState, useRef} from 'react'
interface Person {
  firstName: string
  lastName: string
}

interface Props {
  text: string
  ok?: boolean
  i?: number
  fn?: (bob: string) => string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  person: Person
}

export const TextField: React.FC<Props> = ({handleChange}) => {
  const [count, setCount] = useState<number | null | undefined | string>(5)

  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  )
}

