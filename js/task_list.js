function DanhSachTask() {
    this.arr = [];

    this.themTask = function (task) {
        this.arr.push(task);
    }

    this.xoaTask = function (id) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].id === id) {
                this.arr.splice(i, 1);
                break;
            }
        }
    }

    this.changeStatus = function (id) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].id === id) {
                if (this.arr[i].trangThai === 'todo') {
                    this.arr[i].trangThai = 'completed';
                    break;
                } else {
                    this.arr[i].trangThai = 'todo';
                    break;
                }
            }
        }
    }
}