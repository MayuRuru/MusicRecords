<template>
  <div>
    <h1>PUNK RECORDS</h1>
    <ul>
      <li v-for="(record, index) in records" :key="record.index">
        {{ index }} - {{ record.album }} - {{ record.band}}
        <button @click="deleteRecord(index)">delete</button>
        <button @click="editRecord(index)">edit</button>
      </li>
    </ul>
    <input type="text" v-model="newRecord.album" />
    <button v-if="mode == 'add'" @click="addRecord">Add</button>
    <button v-if="mode == 'edit'" @click="updateRecord">Update</button>
    <p>{{ newRecord.index }} {{ newRecord.album }}</p>
  </div>
</template>

<script>
import axios from "axios";
import { recordsApiService } from "@/services/recordsApiService.js";

export default {
  data() {
    return {
      indextoUpdate: "",
      mode: "add",
      newRecord: {},
      //records: [{ album: "troika" }],
      records: [],
    };
  },

  mounted() {
    //this.fetchAll();
    // cuando te cargas (mounted) ejecutas el fetch
    this.getAll();
  },

  methods: {
    async addRecord() {
      // clausula de salvaguarda:
      if (!this.newRecord.album) return;
      // this.records.push(this.newRecord);
      //this.records = [...this.records, this.newRecord];
      await recordsApiService.create(this.newRecord);
      this.getAll();
      this.newRecord = {};
    },
    deleteRecord(index) {
      // necesitamos un index y pasarlo como parametro
      //this.records.splice(index, 1);
      const id = this.records[index].id;
      //this.deletebyId(id);
      recordsApiService.deletebyId(id);
      //this.fethAll();
      this.getAll();
    },
    editRecord(index) {
      //necesita el indice y guardarlo en el nuevo array:
      //anyadiremos un boton de update para no usar el add
      this.mode = "edit";
      this.newRecord = this.records[index];
      this.indextoUpdate = index;
    },
    updateRecord() {
      this.mode = "add";
      this.records[this.indextoUpdate] = this.newRecord;
      this.newRecord = {};
    },

    async getAll() {
      this.records = await recordsApiService.fetchAll();
      console.log(this.records);
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
</style>
