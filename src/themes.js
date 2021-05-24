export default {
  button: {
    base: 'inline-block min-w-[44px] min-h-[44px] py-2 px-4 rounded-md focus:outline-none',
    fill: {
      base: 'text-white',
      primary: {
        base: 'bg-gradient-to-br from-[#01d9ff] to-[#28a2f4]',
        active: '',
        disabled: '',
      },
      secondary: {
        base: 'bg-gradient-to-br from-[#5a64d7] to-[#0f114c]',
        active: '',
        disabled: '',
      },
      tertiary: {
        base: 'bg-gradient-to-br from-[#28a2f4] to-[#5a64d7]',
        active: '',
        disabled: '',
      },
    },
    outline: {
      base: 'border-2 text-[#3d4451]',
      primary: {
        base: 'border-[#01d9ff]',
        active: '',
        disabled: '',
      },
      secondary: {
        base: 'border-[#5a64d7]',
        active: '',
        disabled: '',
      },
      tertiary: {
        base: 'border-[#28a2f4]',
        active: '',
        disabled: '',
      },
    },
  },
};
