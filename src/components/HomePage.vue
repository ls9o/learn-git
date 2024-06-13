<template>
  <div class="center">
    <ul>
      <form @submit.prevent="submitForm"> <!-- เมื่อฟอร์มถูกส่งให้เรียกใช้เมธอด submitForm -->
        <div>ชื่อนามสกุล:<input class="inputgroup" type="text" v-model="DataInput.name" placeholder="ชื่อผู้ใช้งาน.."></div> <!-- ช่องใส่ชื่อ-นามสกุล -->
        <div>งาน:<input class="inputgroup" type="text" v-model="DataInput.work" placeholder="ชื่องาน.."></div> <!-- ช่องใส่งาน -->
        <div>รายละเอียด<textarea class="inputgroup process-input" v-model="DataInput.moreinfo" placeholder="รายละเอียด.."></textarea></div> <!-- ช่องใส่รายละเอียด -->
        <div>Process<input class="inputgroup" type="text" v-model="DataInput.process" placeholder=".."></div> <!-- ช่องใส่ Process -->
        <div>DD/MM/YY<input class="inputgroup" type="text" v-model="DataInput.dmy" placeholder="DD/MM/YYYY.."></div> <!-- ช่องใส่ DD/MM/YYYY -->
        <button class="button" type="submit">Submit</button> <!-- ปุ่ม Submit -->
      </form>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DataInput: { // ข้อมูลที่ใช้เก็บชื่อ-นามสกุล และงานที่ผู้ใช้กรอก
        name: '',
        work: '',
        moreinfo: '',
        process: '',
        dmy: '',
      }
    };
  },
  components: {
  },
  methods: {
    submitForm() { // เมื่อฟอร์มถูกส่ง
      const savedData = localStorage.getItem('formData'); // ดึงข้อมูลที่เก็บไว้ใน Local Storage มา
      this.allData = savedData ? JSON.parse(savedData) : []; // แปลงข้อมูลที่ดึงมาเป็นอาร์เรย์หรือสร้างใหม่ถ้าไม่มีข้อมูล
      this.allData.push(this.DataInput); // เพิ่มข้อมูลใหม่เข้าไปในอาร์เรย์
      localStorage.setItem('formData', JSON.stringify(this.allData)); // บันทึกข้อมูลใหม่ลงใน Local Storage
      this.$router.push({ name: 'ThisPage2' }); // Redirect ไปยังหน้า ThisPage2
    }
  },
};
</script>

<style scoped>



@import '../components/sass/_Thishomepage.scss';

</style>
