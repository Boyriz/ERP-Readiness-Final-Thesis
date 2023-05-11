<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';

const groupedData = ref([]);
const role = ref('');

const calculateMaturityLevel = (averageScore) => {
  if (averageScore >= 10 && averageScore <= 24) {
    return "INITIAL";
  } else if (averageScore >= 25 && averageScore <= 29) {
    return "REPEATABLE";
  } else if (averageScore >= 30 && averageScore <= 34) {
    return "DEFINED";
  } else if (averageScore >= 35 && averageScore <= 39) {
    return "MANAGED";
  } else if (averageScore >= 40) {
    return "OPTIMIZED";
  } else {
    return "Unknown";
  }
};

const getRecommendation = (type, maturityLevel) => {
  if (type === 'people') {
    if (maturityLevel === 'INITIAL') {
      return 'Perusahaan belum menunjukkan kesiapan people yang baik dalam implementasi ERP modul produksi. Oleh karena itu, perusahaan membutuhkan perencanaan kesiapan sumber daya manusia yang sangat baik di semua departemen untuk implementasi ERP modul produksi.';
    } else if (maturityLevel === 'REPEATABLE') {
      return 'Perusahaan telah cukup menunjukkan kesiapan sumber daya manusia dalam mengimplementasikan ERP modul produksi dengan baik. Namun, perusahaan masih membutuhkan perencanaan kesiapan SDM yang lebih matang dan terorganisir di semua departemen untuk implementasi ERP modul produksi.';
    } else if (maturityLevel === 'DEFINED') {
      return 'Perusahaan telah menunjukkan kesiapan sumber daya manusia dalam mengimplementasikan ERP modul produksi dengan baik. Namun, perusahaan masih membutuhkan rencana kesiapan orang yang terstandarisasi di semua departemen untuk implementasi ERP modul produksi.';
    } else if (maturityLevel === 'MANAGED') {
      return 'Perusahaan telah menunjukkan kesiapan people dalam mengimplementasikan modul produksi ERP dengan baik dan terstandarisasi. Namun, perusahaan masih belum melakukan proses evaluasi terhadap kesiapan people secara keseluruhan dalam implementasi ERP modul produksi.';
    } else if (maturityLevel === 'OPTIMIZED') {
      return 'Perusahaan telah menunjukkan kesiapan sumber daya manusia dalam mengimplementasikan ERP modul produksi yang terstandardisasi dengan baik dan telah melakukan evaluasi secara menyeluruh sehingga siap untuk melakukan proses implementasi ERP modul produksi.';
    }
  } else if (type === 'process') {
    if (maturityLevel === 'INITIAL') {
      return 'Perusahaan belum menunjukkan kesiapan proses bisnis yang baik dan matang dalam implementasi ERP modul produksi. Oleh karena itu, perusahaan membutuhkan perencanaan kesiapan proses bisnis yang sangat baik di semua departemen untuk implementasi ERP modul produksi.';
    } else if (maturityLevel === 'REPEATABLE') {
      return 'Perusahaan menunjukkan kesiapan proses bisnis yang baik dan matang. Namun, perusahaan masih membutuhkan kesiapan proses yang lebih baik yang mencakup semua departemen dalam implementasi ERP modul produksi.';
    } else if (maturityLevel === 'DEFINED') {
      return 'Perusahaan telah menunjukkan kesiapan proses bisnis yang baik dan matang. Namun, perusahaan membutuhkan kesiapan proses yang terstandarisasi sebagai indikator keseluruhan yang mencakup seluruh departemen dalam implementasi ERP modul produksi.';
    } else if (maturityLevel === 'MANAGED') {
      return 'Perusahaan sudah menunjukan kesiapan proses bisnis yang baik dan sudah terstandarisasi. Namun, perusahaan harus melakukan evaluasi secara menyeluruh dalam implementasi ERP modul produksi.';
    } else if (maturityLevel === 'OPTIMIZED') {
      return 'Perusahaan sudah menunjukan kesiapan proses bisnis, terstandarisasi, dan sudah dilakukan evaluasi. Sehingga perusahaan dapat dikatakan siap dalam implementasi ERP modul produksi.';
    }
  } else if (type === 'technology') {
    if (maturityLevel === 'INITIAL') {
      return 'Perusahaan belum menunjukan kesiapan teknologi yang baik dan matang. Oleh karena itu, perusahaan membutuhkan tingkat kesiapan teknologi yang lebih baik lagi secara menyeluruh berdasarkan indikator yang ada.';
    } else if (maturityLevel === 'REPEATABLE') {
      return 'Perusahaan cukup menunjukan kesiapan teknologi yang baik dan matang. Namun, perusahaan masih membutuhkan tingkat kesiapan teknologi yang lebih baik lagi dan terorganisir untuk implementasi ERP modul produksi.';
    } else if (maturityLevel === 'DEFINED') {
      return 'Perusahaan sudah menunjukan kesiapan teknologi yang baik dan matang. Namun, perusahaan masih membutuhkan tingkat kesiapan teknologi yang terstandarisasi secara menyeluruh dalam pengembangan sistem untuk implementasi ERP modul produksi.';
    } else if (maturityLevel === 'MANAGED') {
      return 'Perusahaan sudah menunjukan kesiapan teknologi yang baik dan terstandarisasi. Namun, perusahaan masih membutuhkan tingkat kesiapan teknologi yang terevaluasi dan terstruktur secara menyeluruh dalam pengembangan sistem untuk implementasi ERP modul produksi.';
    } else if (maturityLevel === 'OPTIMIZED') {
      return 'Perusahaan sudah menunjukan tingkat kesiapan teknologi yang baik, terstandarisasi, dan terevaluasi. Sehingga, dapat dikatakan perusahaan siap dalam implementasi ERP modul produksi.';
    }
  }
};

const fetchAndUpdateData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/readiness/');
    const data = response.data;

    const groups = {};
    data.forEach(item => {
      const result = JSON.parse(item.result);
      result.forEach(indicator => {
        const type = indicator.type;
        if (!groups[type]) {
          groups[type] = {
            maturityLevel: calculateMaturityLevel(item.avgScore),
            recommendation: getRecommendation(type, calculateMaturityLevel(item.avgScore))
          };
        }

        // check if the role data is not already fetched for the type
        if (!groups[type].role) {
          groups[type].role = item.role;
        }

      });
    });
    groupedData.value = groups;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchAndUpdateData();

  // Update data every time there are three new items in the database
  setInterval(fetchAndUpdateData, 3000);
});

</script>

<template>
  <div class="table">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Dimension</th>
          <th>Role</th>
          <th>Maturity Level</th>
          <th>Recommendation</th>
        </tr>
      </thead>
      <tbody v-for="(group, type) in groupedData" :key="type">
        <tr>
          <td>{{ type }}</td>
          <td>{{ group.role }}</td>
          <td>{{ group.maturityLevel }}</td>
          <td>{{ group.recommendation }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



<style lang="scss" scoped>
  .table {
    margin-top: 20px;
    table {
      width: 100%;
      border-collapse: collapse;
      th, td {
        padding: 15px;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }
      th {
        background-color: rgb(28, 28, 128);
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #fff;
      }
      tr:last-child td {
        border-bottom: none;
      }
      tbody tr:nth-child(odd) {
        background-color: #f5f5f5;
      }
      tbody tr:hover {
        background-color: #ebebeb;
      }
    }
  }
</style>