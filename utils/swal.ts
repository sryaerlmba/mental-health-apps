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

export function alertConfirm(message: string) {
  return Swal.fire({
    title: "Apakah kamu yakin?",
    text: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Ya, lanjutkan",
    cancelButtonText: "Batal",
  });
}