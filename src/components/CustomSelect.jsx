import styled from "styled-components";
import Select from 'react-select'

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provider) => ({
      ...provider,
      backgroundColor: 'var(--color-ui-base)',
      color: 'var(--color-text)',
      bordedRadius: 'var(--radius)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (provider, state) => ({
      ...provider,
      cursor: 'pointer',
      color: 'var(--color-text)',
      backgroundColor: state.isSelected ? 'var(--color-bg)' : 'var(--color-ui-base)'
    }),
  }
})`
width: 200px;
border-radius: var(--radius);
border: none;

& > * {
  box-shadow: var(--shadow);
}

& * {
  color: var(--color-text) !important;
}
& > div[id] {
  background-color: var(--color-ui-base);
}

`