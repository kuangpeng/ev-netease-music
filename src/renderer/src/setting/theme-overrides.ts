import { GlobalThemeOverrides,
  SliderProps,
  DataTableProps,
  DrawerProps
} from 'naive-ui'

function getModuleThemeOverride(m: keyof GlobalThemeOverrides): GlobalThemeOverrides[keyof GlobalThemeOverrides] {
  // TODO theme
  // const themeMode: 'light' | 'dark' =  (window.appSets.darkMode == 'system' ? 'light' : window.appSets.darkMode) || 'light'
  const themeMode = 'light'
  const currentThemeSets = {
    light: lightThemeOverrides,
    dark: darkThemeOverrides
  }

  return currentThemeSets[themeMode][m]
}

export const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#ec4141',
    primaryColorHover: '#ec4141'
  }
}

export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#ec4141'
  }
}

const commonOverrides = getModuleThemeOverride('common') as GlobalThemeOverrides['common']

export const appOverride = {
  appControl: {
    Slider: <NonNullable<SliderProps['themeOverrides']>>{
      handleSize: '10px',
      handleColor: commonOverrides!.primaryColor
    }
  },
  playList: {
    DataTable: <NonNullable<DataTableProps['themeOverrides']>>{
      tdPaddingSmall: '7px 5px'
    },
    Drawer: <NonNullable<DrawerProps['themeOverrides']>>{
      bodyPadding: '0 20px'
    }
  }
}
