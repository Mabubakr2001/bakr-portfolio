export default function Experience({companyImg, companyName, accountName, title, period, rule}) {
  return (
    <div className="flex flex-col md:flex-row mt-12">
      {companyImg}
      <div className="ml-0 md:ml-6">
        <h3 className="text-4xl font-medium">{companyName} &#40;{accountName}&#41;</h3>
        <p className="text-blue-700 text-2xl font-medium mt-2">{title}</p>
        <p className="text-2xl mt-2">{period}</p>
        <p className="text-gray-500 text-2xl mt-2 leading-8">{rule}</p>
      </div>
    </div>
  )
}
