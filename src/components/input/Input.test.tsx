import '@testing-library/jest-dom'
import { fireEvent, RenderResult, render, screen } from '@testing-library/react'
import Input from './Input'
import { describe, expect, beforeEach, vi, afterAll, test } from 'vitest'

describe('Input', () => {
  let component: RenderResult

  beforeEach(() => {
    component = render(<Input />)
  })

  afterAll(() => {
    vi.clearAllMocks()
    vi.clearAllTimers()
  })

  test('Should render input without value by default', () => {
    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('')
  })

  test('Should extends all properties and event of a Input element', () => {
    const mockType = 'url'
    const mockStyle = { color: 'red' }
    const mockOnChange = vi.fn()
    const mockOnFocus = vi.fn()
    const mockTitle = 'Title example'
    const mockClassName = 'class-example'

    component.rerender(
      <Input
        type={mockType}
        style={mockStyle}
        onChange={mockOnChange}
        onFocus={mockOnFocus}
        title={mockTitle}
        className={mockClassName}
      />
    )

    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: 'Value example' } })
    fireEvent.focus(input, { target: { value: 'Value example' } })

    expect(input).toHaveProperty('type', mockType)
    expect(input).toHaveProperty('style')
    expect(input).toHaveProperty('title', mockTitle)
    expect(input).toHaveProperty('className')
    expect(input).toHaveClass(mockClassName)
    expect(input).toHaveStyle(mockStyle)
    expect(mockOnChange).toHaveBeenCalledTimes(1)
    expect(mockOnFocus).toHaveBeenCalledTimes(1)
  })

  test('Should allow add property label in component and show tag <label>', () => {
    const valuePlaceholder = 'Placeholder example'
    const valueLabel = 'Label example'
    const valueDefault = 'Default value'
    const valueId = 'id-example'

    component.rerender(
      <Input
        id={valueId}
        label={valueLabel}
        placeholder={valuePlaceholder}
        defaultValue={valueDefault}
      />
    )

    const inputElement = screen.getByLabelText(valueLabel)

    expect(inputElement).toHaveValue(valueDefault)
    expect(inputElement).toHaveProperty('id', valueId)
  })
})
