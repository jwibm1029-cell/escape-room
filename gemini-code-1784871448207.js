// 게임 상태 변수
let hasKey = false;
let isEscaped = false;

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const inputContainer = document.getElementById('modal-input-container');
const passcodeInput = document.getElementById('passcode-input');
const inventoryItem = document.getElementById('inventory-item');

// 책장 조사
function inspectBookshelf() {
  showModal(
    "오래된 책장",
    "책장을 살펴보니 먼지 쌓인 해적 일지 표지에 의미심장한 숫자 '1715'가 새겨져 있습니다."
  );
}

// 지도 조사
function inspectMap() {
  if (hasKey) {
    showModal("책상 위 지도", "지도 암호를 이미 풀어 열쇠를 획득했습니다.");
  } else {
    showModal(
      "비밀 지도",
      "지도 구석에 자물쇠 그림과 함께 4자리 비밀번호를 입력하는 장치가 있습니다."
    );
    inputContainer.classList.remove('hidden');
  }
}

// 보물상자 조사
function inspectChest() {
  if (isEscaped) {
    showModal("탈출 성공!", "이미 상자를 열고 탈출에 성공했습니다!");
    return;
  }

  if (hasKey) {
    isEscaped = true;
    showModal(
      "🎉 방탈출 성공!",
      "황금 열쇠로 보물상자를 열었습니다! 상자 안에서 탈출용 나침반과 방 열쇠를 찾아 무사히 탈출했습니다!"
    );
  } else {
    showModal(
      "잠긴 보물상자",
      "묵직한 쇠사슬로 잠겨 있습니다. 맞는 열쇠가 필요한 것 같습니다."
    );
  }
}

// 비밀번호 확인
function checkPasscode() {
  const code = passcodeInput.value.trim();
  if (code === "1715") {
    hasKey = true;
    inventoryItem.textContent = "🔑 황금 열쇠";
    inventoryItem.style.color = "#f1c40f";
    showModal(
      "암호 해독 성공!",
      "지도의 비밀 칸이 열리며 [황금 열쇠]를 얻었습니다!"
    );
  } else {
    alert("암호가 올바르지 않습니다. 다시 시도해보세요.");
  }
  passcodeInput.value = "";
}

// 모달 닫기
function closeModal() {
  modal.classList.add('hidden');
  inputContainer.classList.add('hidden');
}