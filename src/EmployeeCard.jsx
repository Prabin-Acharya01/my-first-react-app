import './EmployeeCard.css'

function EmployeeCard({ name, title, email }) {
  return (
    <div className="employee-card">
      <h2>{name}</h2>
      <p className="employee-title">{title}</p>
      <p className="employee-email">{email}</p>
    </div>
  )
}

export default EmployeeCard
