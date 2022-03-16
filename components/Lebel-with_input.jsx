const Lebel = ({ type, label }) => (
  <div className="pt-6">
    <label htmlFor="name" className="block h-5 border-0 text-white">
      {label}
    </label>
    <input type={type} id="name" className="bg-gray-800" />
  </div>
)
export default Lebel
