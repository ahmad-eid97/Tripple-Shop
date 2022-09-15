import ChooseList from '../../UIs/ChooseList/ChooseList';

import cls from './topFilterNav.module.scss';

const TopFilterNav = ({ viewType, setViewType }) => {
  const filterList = [
    {
      item: 'Newest',
      query: 'Newest'
    },
    {
      item: 'Today',
      query: 'Today'
    },
    {
      item: 'Yesterday',
      query: 'Yesterday'
    },
    {
      item: 'Last Month',
      query: 'Last Month'
    },
  ]

  return (
    <div className={cls.topFilterNav}>

      <div className={cls.topFilterNav__icons}>

        <i className={`${viewType === 'grid' ? cls.active : ''} fa-light fa-grid-2`} onClick={() => setViewType('grid')}></i>

        <i className={`${viewType === 'list' ? cls.active : ''} fa-solid fa-list-ul`} onClick={() => setViewType('list')}></i>

      </div>

      <div className={cls.topFilterNav__filtering}>

        <ChooseList list={filterList} text="Brands" withArrow={true} />

        <ChooseList list={filterList} text="Sort By" withArrow={true} />

      </div>

    </div>
  )
}

export default TopFilterNav