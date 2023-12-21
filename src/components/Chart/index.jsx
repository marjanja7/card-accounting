  import { PieChart, Pie, Cell } from 'recharts';


    const Chart = () => {
      const data = [
        {
          value: 1,
          name: 'Автомобиль',
        },
        {
          value: 2,
          name: 'Продукты',
        },
        {
          value: 3,
          name: 'Обучение'
        },
        {
          value: 4,
          name: 'Одежда'
        },
        {
          value: 5,
          name: 'Путешествия'
        },
        {
          value: 6,
          name: 'Развлечения'
        },
        {
          value: 7,
          name: 'Другое'
        },
      ];
      const COLORS =[
        "#8884d8",
        "#83a6ed",
        "#8dd1e1",
        "#82ca9d",
        "#a4de6c",
        "#d0ed57",
        "#ffc658",
      ];
      return (
        <div className='flex mt-10'>
        <div>
          <PieChart width={600} height={300}>
            <Pie data={data}
                 cx={120}
                 cy={150}
                 innerRadius={0}
                 outerRadius={100}
                 fill='#8884d8'
                 paddingAngle={1}
                 dataKey="value"
            >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
          </PieChart>
        </div>
        <div className='mt-10 ml-10 flex flex-col gap-y-2'>
          <div className='bg-blue-200 text-blue-800 rounded-full px-4'>{data.name} - </div>

        </div>

        </div>
      )
    }
export default Chart;