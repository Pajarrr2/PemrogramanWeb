let todos = []; // Array untuk menyimpan daftar tugas
        let editingIndex = -1; // Index untuk menyimpan tugas yang sedang diedit

        // Fungsi untuk menambahkan tugas
        function addTodo() {
            const todoInput = document.getElementById('todoInput').value;

            if (todoInput === "") {
                alert("Tugas tidak boleh kosong!");
                return;
            }

            if (editingIndex === -1) {
                // Jika tidak sedang mengedit, tambahkan tugas baru
                todos.push(todoInput);
            } else {
                // Jika sedang mengedit, perbarui tugas yang sudah ada
                todos[editingIndex] = todoInput;
                editingIndex = -1;
            }

            document.getElementById('todoInput').value = ""; // Kosongkan input
            renderTodoList(); // Perbarui tampilan daftar tugas
        }

        // Fungsi untuk menghapus tugas
        function deleteTodo(index) {
            todos.splice(index, 1); // Hapus tugas dari array
            renderTodoList(); // Perbarui tampilan daftar tugas
        }

        // Fungsi untuk mengedit tugas
        function editTodo(index) {
            document.getElementById('todoInput').value = todos[index]; // Masukkan tugas yang akan diedit ke input
            editingIndex = index; // Simpan index tugas yang sedang diedit
        }

        // Fungsi untuk merender daftar tugas
        function renderTodoList() {
            const todoList = document.getElementById('todoList');
            todoList.innerHTML = ""; // Kosongkan daftar sebelum dirender ulang

            todos.forEach((todo, index) => {
                todoList.innerHTML += `
                    <li>
                        ${todo}
                        <div>
                            <button class="edit-btn" onclick="editTodo(${index})">Edit</button>
                            <button class="delete-btn" onclick="deleteTodo(${index})">Hapus</button>
                        </div>
                    </li>
                `;
            });
        }