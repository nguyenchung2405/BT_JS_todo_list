function KiemTra(arr) {
    this.noiDung = getEle('newTask').value;

    this.kiemTraRong = function () {
        if (this.noiDung === '') {
            alert('Vui lòng nhập vào nội dung.');
            return null;
        }
    }

    this.kiemTraTrung = function () {
        if (arr.length > 0) {
            for (var i = 0; i < arr.length; i++) {
                if (this.noiDung.toLowerCase() === arr[i].tenTask.toLowerCase()) {
                    alert('Đã tồn tại task này.');
                    return false;
                }
            }
        } else {
            return null;
        }
    }
}