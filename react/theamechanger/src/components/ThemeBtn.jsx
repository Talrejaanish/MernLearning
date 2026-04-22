import React from 'react'
import useTheme from '../context/theame'

function ThemeBtn() {
  const { themeMode, darkTheme, lightTheme } = useTheme()

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked

    if (darkModeStatus) {
      darkTheme()
    } else {
      lightTheme()
    }
  }

  return (
    <div className="flex items-center gap-3">
      <label className="relative inline-block w-14 h-7 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={onChangeBtn}
          checked={themeMode === 'dark'}
        />
        <span className="absolute inset-0 rounded-full bg-gray-300 transition-colors peer-checked:bg-slate-700"></span>
        <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-md transition-transform peer-checked:translate-x-7"></span>
      </label>
    </div>
  )
}

export default ThemeBtn