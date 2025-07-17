import Swal from "sweetalert2";

export function alertError(message: string) {
  return Swal.fire({
    icon: "error",
    title: "Error",
    text: message,
  });
}

export function alertSuccess(message: string) {
  return Swal.fire({
    icon: "success",
    title: "Berhasil",
    text: message,
  });
}

// export function alertConfirm(message: string) {
//   return Swal.fire({
//     title: "Are you sure?",
//     text: message,
//     icon: "warning",
//   })
// }