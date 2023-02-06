import Swal from 'sweetalert2';
import { useEffect } from 'react';

export default function TabSwitch() {
  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        showToast();
      }
    });
  }, []);
  const showToast = () => {
    Swal.fire({
      title: 'Error!',
      text: 'Tab switch deteted!',
      icon: 'error',
      confirmButtonText: 'Okay',
    });
  };
  return <div className="container">Try switching tabs</div>;
}
