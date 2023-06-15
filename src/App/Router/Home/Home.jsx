import React, { memo } from 'react'
import { useTranslation } from 'common/i18n'

const Home = () => {

  const { t } = useTranslation()

  return (
    <div>
      {t('Welcome to React template')}
    </div>
  )

}

export default memo(Home)
