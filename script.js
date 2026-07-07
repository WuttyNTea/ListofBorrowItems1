let inventoryData = [
    { id: "INV-001", name: "อุปกรณ์กันสั่นกล้อง (DJI RS 4 COMBO)", status: "ว่าง", borrower: null },
    { id: "INV-002", name: "แบตกล้อง sony NP-F970 (1)", status: "ถูกยืม", borrower: { name: "สมชาย ใจดี", date: "2026-07-06", time: "10:00" } },
    { id: "INV-003", name: "แบตกล้อง sony NP-F970 (2)", status: "ว่าง", borrower: null },
    { id: "INV-004", name: "แบตกล้อง sony NP-F970 (3)", status: "ว่าง", borrower: null },
    { id: "INV-005", name: "แบตกล้อง sony NP-F970 (4)", status: "ว่าง", borrower: null },
    { id: "INV-006", name: "แท่นชาร์ตแบตเตอรี่ sony NP-F970 (LICHARGER NITECORE DUAL)", status: "ว่าง", borrower: null },
    { id: "INV-007", name: "ชุดหูฟังอินเตอร์คอมไร้สาย สำหรับ 5 คน (SARAMONIC WITALK9SE-5S WIRE)", status: "ว่าง", borrower: null },
    { id: "INV-008", name: "สาย ADAPTER Micro HDMI_TO_HDM FEMAIL (UGREEN)", status: "ว่าง", borrower: null },
    { id: "INV-009", name: "สาย Micro HDMI_TO_HDM (1)(UGREEN)", status: "ว่าง", borrower: null },
    { id: "INV-010", name: "สาย Micro HDMI_TO_HDM (2)(UGREEN)", status: "ว่าง", borrower: null },
    { id: "INV-011", name: "สาย HDMI 20 เมตร (UGREEN)", status: "ว่าง", borrower: null },
    { id: "INV-012", name: "สาย HDMI 1.5 เมตร (1) (UGREEN)", status: "ว่าง", borrower: null },
    { id: "INV-013", name: "สาย HDMI 1.5 เมตร (2) (UGREEN)", status: "ว่าง", borrower: null },
    { id: "INV-014", name: "สาย HDMI 1.5 เมตร (3) (UGREEN)", status: "ว่าง", borrower: null },
    { id: "INV-015", name: "SOFTBOX กรองแสง GODOX SB-BW 70x100 CM. (1)", status: "ว่าง", borrower: null },
    { id: "INV-016", name: "SOFTBOX กรองแสง GODOX SB-BW 70x100 CM. (2)", status: "ว่าง", borrower: null },
    { id: "INV-017", name: "ขาตั้งไฟสำหรับแฟลชสตูดิโอ LIGHT STAND ALUMINIUM 280CM", status: "ว่าง", borrower: null },
    { id: "INV-018", name: "แบตเตอรี่ SONY NP-FW50 (1)", status: "ว่าง", borrower: null },
    { id: "INV-019", name: "แบตเตอรี่ SONY NP-FW50 (2)", status: "ว่าง", borrower: null },
    { id: "INV-020", name: "แท่นชาร์ตแบตเตอรี่ sony NP-FW50 (LICHARGER NITECORE DUAL)", status: "ว่าง", borrower: null },
    { id: "INV-021", name: "ไฟแฟลช (FLASH TRIGGER GODOX X2T)", status: "ว่าง", borrower: null },
    { id: "INV-022", name: "ไมโครโฟนไร้สาย (DJI MIC MINI 2TX+1RX+CHARGING)", status: "ว่าง", borrower: null },
    { id: "INV-023", name: "ชุดรับส่งสัญญาณภาพและเสียงแบบไร้สาย(1) ACCSOON CINEVIEW HE", status: "ว่าง", borrower: null },
    { id: "INV-024", name: "ชุดรับส่งสัญญาณภาพและเสียงแบบไร้สาย(2) ACCSOON CINEVIEW HE", status: "ว่าง", borrower: null },
    { id: "INV-025", name: "สวิตช์ควบคุมไฟ SWITCHERS BLACKMAGIC DESIGN ATEM MINI PRO", status: "ว่าง", borrower: null },
    { id: "INV-026", name: "ออดิโออินเตอร์เฟส DONNER LIVE JACK 2x2", status: "ว่าง", borrower: null },
    { id: "INV-027", name: "ไฟแฟลช (FLASH GODOX AD200 PRO II TTL)", status: "ว่าง", borrower: null },
    { id: "INV-028", name: "เลนส์มุมกว้าง SONY E PZ 10-20MM F/4 G", status: "ว่าง", borrower: null },
    { id: "INV-029", name: "เลนส์ซูม SONY E PZ 18-105MM F/4 G OSS", status: "ว่าง", borrower: null },
    { id: "INV-030", name: "จอ MONITOR FEEL WORLD SEETEC ATEM156 15.6 INCH LIVE STREAM", status: "ว่าง", borrower: null },
    { id: "INV-031", name: "กล้องวิดีโอ 4K (OB) PANASONIC HC-X1200", status: "ถูกยืม", borrower: { name: "วิชัย ถ่ายภาพ", date: "2026-07-05", time: "14:15" } },
    { id: "INV-032", name: "กล้องถ่ายภาพ SONY ZV-E10 II (BLACK) (BODY) + LENS SONY E PZ 16-50MM", status: "ว่าง", borrower: null },
    { id: "INV-033", name: "กล้องถ่ายภาพ SONY ZV-E10 II (BLACK) (BODY) + LENS SONY E PZ 16-50MM", status: "ว่าง", borrower: null },
    { id: "INV-034", name: "ขาตั้งกล้องวิดีโอ TRIPOD ULANZI MT-81 VIDEO", status: "ว่าง", borrower: null },
    { id: "INV-035", name: "ตู้กันความชื้น SHUTTER B SB-160EM (160 ลิตร)", status: "ว่าง", borrower: null },
    { id: "INV-036", name: "ไฟสตูดิโอ (ไฟวิดีโอ LED ZSYB Y300S BI COLOR)", status: "ว่าง", borrower: null }
];

function renderTable(searchTerm = "") {
    if (typeof searchTerm !== 'string') {
        searchTerm = "";
    }

    const tableBody = document.getElementById('inventory-list');
    if (!tableBody) return; // ป้องกันพังถ้าหาตารางไม่เจอ

    tableBody.innerHTML = '';

    let totalCount = inventoryData.length;
    let availableCount = 0;
    let borrowedCount = 0;

    inventoryData.forEach((item, index) => {
        if (item.status === 'ว่าง') {
            availableCount++;
        } else {
            borrowedCount++;
        }

        const matchSearch = item.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.name.toLowerCase().includes(searchTerm.toLowerCase());
        
        if (searchTerm !== "" && !matchSearch) {
            return; 
        }

        const tr = document.createElement('tr');
        let statusHtml = '';
        let actionBtn = '';

        if (item.status === 'ว่าง') {
            statusHtml = `<span class="status-available">${item.status}</span>`;
            actionBtn = `<button class="btn btn-primary" onclick="openBorrowModal(${index})">ทำรายการยืม</button>`;
        } else {
            statusHtml = `<span class="status-borrowed">${item.status}</span>`;
            actionBtn = `<button class="btn btn-secondary" onclick="openInfoModal(${index})">ตรวจสอบผู้ยืม</button>`;
        }

        tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${statusHtml}</td>
            <td>${actionBtn}</td>
        `;
        tableBody.appendChild(tr);
    });

    document.getElementById('count-total').innerText = totalCount;
    document.getElementById('count-available').innerText = availableCount;
    document.getElementById('count-borrowed').innerText = borrowedCount;
}

function filterTable() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        renderTable(searchInput.value);
    }
}

function openBorrowModal(index) {
    const item = inventoryData[index];
    document.getElementById('borrow-item-id').value = index;
    document.getElementById('borrow-item-code').value = item.id;
    document.getElementById('borrow-item-name').value = item.name;
    
    const now = new Date();
    document.getElementById('borrow-date').value = now.toISOString().split('T')[0];
    document.getElementById('borrow-time').value = now.toTimeString().split(' ')[0].substring(0, 5);
    document.getElementById('borrower-name').value = '';

    document.getElementById('borrow-modal').style.display = 'block';
}

const borrowForm = document.getElementById('borrow-form');
if (borrowForm) {
    borrowForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const index = document.getElementById('borrow-item-id').value;
        const name = document.getElementById('borrower-name').value;
        const date = document.getElementById('borrow-date').value;
        const time = document.getElementById('borrow-time').value;

        inventoryData[index].status = 'ถูกยืม';
        inventoryData[index].borrower = {
            name: name,
            date: date,
            time: time
        };

        closeModal('borrow-modal');
        renderTable();
        alert('บันทึกการยืมสำเร็จ!');
    });
}

function openInfoModal(index) {
    const item = inventoryData[index];
    document.getElementById('info-item-id').value = index;
    
    document.getElementById('info-item-desc').innerText = `${item.id} - ${item.name}`;
    document.getElementById('info-borrower-name').innerText = item.borrower.name;
    
    const dateArr = item.borrower.date.split('-');
    const formattedDate = `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
    document.getElementById('info-datetime').innerText = `${formattedDate} เวลา ${item.borrower.time} น.`;

    document.getElementById('info-modal').style.display = 'block';
}

function returnItem() {
    const index = document.getElementById('info-item-id').value;
    
    if(confirm('คุณแน่ใจหรือไม่ว่าได้รับพัสดุชิ้นนี้คืนเรียบร้อยแล้ว?')) {
        inventoryData[index].status = 'ว่าง';
        inventoryData[index].borrower = null;
        
        closeModal('info-modal');
        renderTable();
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

window.onclick = function(event) {
    const borrowModal = document.getElementById('borrow-modal');
    const infoModal = document.getElementById('info-modal');
    
    if (event.target == borrowModal) borrowModal.style.display = "none";
    if (event.target == infoModal) infoModal.style.display = "none";
}

window.onload = function() {
    renderTable();
};