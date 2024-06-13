<template>
  <div class="center">
    <h5>ข้อมูลทั้งหมด</h5>
    <div v-if="data.length" class="flex-container">
      <div class="data" v-for="(item, index) in data" :key="index">
        <h2>งานลำดับที่ {{ index + 1 }}</h2>
        <p>ชื่อนามสกุล: {{ item.name }}</p>
        <p>งาน: {{ item.work }}</p>
        <article v-show="item.isVisible"> <!-- ใช้ item.isVisible แทน isVisible -->
          <p>รายละเอียด: {{ item.moreinfo }}</p>
          <p class="Process">Process: {{ item.process }}</p>
          <p class="dmy">DD/MM/YYYY: {{ item.dmy }}</p>
        </article>
        <button @click="deleteRecord(index)" class="deleteitem">del</button> <!-- ปุ่มลบข้อมูล -->
        <button @click="gofixpage(index)" class="fixitem">fix</button> <!-- ปุ่มลบข้อมูล -->
        <button @click="toggleVisible(index)" class="showmoreitem"> <!-- ส่ง index เป็นพารามิเตอร์ -->
          <div>
            <i v-if="item.isVisible === true" class="fa-solid fa-angle-up"></i>
            
            <i v-else class="fa-solid fa-angle-down"></i>
          </div>
        </button>
      </div>
    </div>
    <div v-else>
      <p>No data available</p>
    </div>
    <button  @click="addNewItem" class="addprocess"> 
      <i class="fas fa-plus"></i>
    </button> <!-- ปุ่ม HI -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [] // ข้อมูลที่ใช้เก็บข้อมูลทั้งหมดที่ถูกบันทึกไว้ใน Local Storage
    };
  },
  mounted() {
    this.loadData(); // เมื่อ component ถูกโหลด ให้ดึงข้อมูลทั้งหมดจาก Local Storage มาแสดง
  },
  methods: {
    loadData() {
      const savedData = localStorage.getItem('formData'); // ดึงข้อมูลที่เก็บไว้ใน Local Storage มา
      if (savedData) { // ถ้ามีข้อมูล
        this.data = JSON.parse(savedData); // แปลงข้อมูลที่ดึงมาเป็นอาร์เรย์
        this.data.forEach(item => item.isVisible = false); // ตั้งค่าเริ่มต้น isVisible เป็น false สำหรับแต่ละรายการ
      }
    },
    deleteRecord(index) { // ฟังก์ชันสำหรับลบข้อมูลในอาร์เรย์
      this.data.splice(index, 1); // ลบข้อมูลที่ต้องการออกจากอาร์เรย์
      localStorage.setItem('formData', JSON.stringify(this.data)); // บันทึกข้อมูลใหม่ลงใน Local Storage
      this.loadData(); // โหลดข้อมูลใหม่
    },
    toggleVisible(index) {
      this.data[index].isVisible = !this.data[index].isVisible; // เปลี่ยนแปลงค่าของ isVisible สำหรับรายการที่ถูกคลิก
    },
    gofixpage(index) {
      this.$router.push({ name: 'ThisIsAbout', params: { selectedIndex: index } });
    },
    addNewItem() {
  this.$router.push({ name: 'home', params: { selectedIndex: null } }); // Redirect ไปยังหน้า ThisIsAbout โดยส่ง selectedIndex เป็น null เพื่อแสดงว่าเป็นการเพิ่มข้อมูลใหม่
}

  }
};
</script>

<style scoped>
@import '../components/sass/_card.scss';
</style>
