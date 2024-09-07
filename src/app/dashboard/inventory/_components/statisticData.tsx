import { SeparatorLine, StatisticDataItem } from "../../_components/StatisticDataItem"

export const StatisticData = () => {
  return (
    <div className="bg-white shadow-sm rounded-lg w-full p-4 ">
      <div className="flex justify-between gap-4">
        <div className="flex flex-col px-4">
          <span className='text-gray-400 font-semibold text-xs tracking-wider'>INVENTARIO</span>
        </div>
      </div>
      <div className='flex justify-between relative'>
        <StatisticDataItem
          value="4,790"
          label="Productos Totales"
          increase={0}
        />
        <SeparatorLine />
        <StatisticDataItem
          value="180"
          label="Total de Proveedores"
          increase={0}
        />
        <SeparatorLine />
        <StatisticDataItem
          value="4"
          label="Productos con stock bajo"
          increase={0}
        />
      </div>
    </div>
  )
}