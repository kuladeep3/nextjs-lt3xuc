import Swal from 'sweetalert2';
export default function Home() {
  const handleButtonClick = () => {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool',
    });
  };
  return (
    <div className="container">
      Hello
      <button onClick={handleButtonClick}>Alert</button>
    </div>
  );
}
