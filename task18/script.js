//    b1:
// <!-- Hiển Thị Số Lượng Từ và Bộ Đếm Số Ký Tự Còn Lại
//   Yêu cầu đề bài
//   1. Hiển thị số lượng từ:
//   Tạo một <textarea> để nhập nội dung.
//   Khi nhập, hiển thị số lượng từ bên dưới theo thời gian thực.
//   2. Bộ đếm số ký tự còn lại:
//   Tạo một <textarea> giới hạn 200 ký tự.
//   Hiển thị số ký tự còn lại khi nhập. -->
{
  /* <body>
    <div class="container">
      <textarea
        id="textInput"
        maxlength="200"
        placeholder="Nhập đoạn văn bản (tối đa 200 ký tự)..."
      ></textarea>
      <div id="wordCount">Số từ: 0</div>
      <div id="charCount">Số ký tự còn lại: 200</div>
    </div>
    <script src="./script.js"></script>
  </body> */
}
// sử dụng DOM để lấy các phần tử

const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
console.log(textInput);
console.log(wordCount);
console.log(charCount);
const maxChars = 200;
textInput.addEventListener("input", () => {
  const text = textInput.value.length;
  let conlai = maxChars - text;
  wordCount.innerHTML = `Số từ:${text}`;
  charCount.innerHTML = `Số ký tự còn lại:${conlai}`;
});
