<template>
    <div class="center">
      <ul>
        <form @submit.prevent="submitForm">
          <div>ชื่อนามสกุล:<input class="inputgroup" type="text" v-model="DataInput.name" placeholder="ชื่อผู้ใช้งาน.."></div>
          <div>งาน:<input class="inputgroup" type="text" v-model="DataInput.work" placeholder="ชื่องาน.."></div>
          <div>รายละเอียด<textarea class="inputgroup process-input" v-model="DataInput.moreinfo" placeholder="รายละเอียด.."></textarea></div>
          <div>Process<input class="inputgroup" type="text" v-model="DataInput.process" placeholder=".."></div>
          <div>DD/MM/YY<input class="inputgroup" type="text" v-model="DataInput.dmy" placeholder="DD/MM/YYYY.."></div>
          <button class="button" type="submit">Submit</button>
        </form>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
  props: ['selectedItem'], // รับค่า selectedItem จาก props
  data() {
    return {
      DataInput: {
        name: '',
        work: '',
        moreinfo: '',
        process: '',
        dmy: '',
      },
    };
  },
  mounted() {
    if (this.selectedItem) { // ตรวจสอบว่ามี selectedItem หรือไม่
      // นำข้อมูลจาก selectedItem มาใส่ใน DataInput
      this.DataInput.name = this.selectedItem.name;
      this.DataInput.work = this.selectedItem.work;
      this.DataInput.moreinfo = this.selectedItem.moreinfo;
      this.DataInput.process = this.selectedItem.process;
      this.DataInput.dmy = this.selectedItem.dmy;
    }
  },
    methods: {
      submitForm() {
        const savedData = localStorage.getItem('formData');
        this.allData = savedData ? JSON.parse(savedData) : [];
        if (this.selectedItem !== null && this.selectedItem.index !== undefined) {
          this.allData[this.selectedItem.index] = this.DataInput;
        } else {
          this.allData.push(this.DataInput);
        }
        localStorage.setItem('formData', JSON.stringify(this.allData));
        this.$router.push({ name: 'ThisPage2' });
      },
    },
  };
  </script>
  
  <style scoped>
  @import '../components/sass/_Thisisabout.scss';
  </style>
  