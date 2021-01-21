var dstTask = new DanhSachTask();

// Khi reload lại trang web thì tải lại dữ liệu đã lưu
getLocalStorage();

/**
 * Kiểm tra Task 
 * - Nếu task trống => báo 'Vui lòng nhập thông tin'
 * - Ngược lại thì thêm task mới
 * */

getEle('addItem').addEventListener('click', function () {
    var nameTask = getEle('newTask').value;
    var kiemTra = new KiemTra(dstTask.arr);
    if (kiemTra.kiemTraRong() !== null && kiemTra.kiemTraTrung() !== false) {
        var task = new Task(nameTask);
        dstTask.themTask(task);
        getEle('newTask').value = '';
    }
    taoBang(dstTask.arr);
    console.log(dstTask);
    setLocalStorage();
});

// Tạo bảng
function taoBang(arr) {
    var content_todo = '';
    var content_completed = '';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].trangThai === 'todo') {
            content_todo += `
                    <li>
                        <span>${arr[i].tenTask}</span>
                        <div class="buttons">
                            <button type="button" class="remove" onclick="deleteTask(${arr[i].id})">
                                <i class="fa fa-trash-alt"></i>
                            </button>
                            <button type="button" class="complete" onclick="changeStatus(${arr[i].id})">
                                <i class="far fa-check-circle"></i>
                            </button>
                        </div>
                    </li>
                `;
        } else {
            content_completed += `
                    <li>
                        <span>${arr[i].tenTask}</span>
                        <div class="buttons">
                            <button type="button" class="remove" onclick="deleteTask(${arr[i].id})">
                                <i class="fa fa-trash-alt"></i>
                            </button>
                            <button type="button" class="complete" onclick="changeStatus(${arr[i].id})">
                                <i class="fas fa-check-circle"></i>
                            </button>
                        </div>
                    </li>
                `;
        }

    }
    getEle('todo').innerHTML = content_todo;
    getEle('completed').innerHTML = content_completed;
}

// Đổi trạng thái Task
function changeStatus(id) {
    dstTask.changeStatus(id);
    taoBang(dstTask.arr);
    setLocalStorage();
}

// Xóa Task
function deleteTask(id) {
    dstTask.xoaTask(id);
    taoBang(dstTask.arr);
    setLocalStorage();
}

// SetLocalStorage
function setLocalStorage() {
    var arrString = JSON.stringify(dstTask.arr);
    localStorage.setItem('dsTask', arrString);
}

// Get local Storage
function getLocalStorage() {
    if (localStorage.getItem('dsTask')) {
        dstTask.arr = JSON.parse(localStorage.getItem('dsTask'));
        taoBang(dstTask.arr);
    }
}

function getEle(id) {
    return document.getElementById(id);
}