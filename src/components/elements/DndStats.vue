<template>
  <div>
    <table>
      <tbody>
        <tr>
          <th>STR</th>
          <th>DEX</th>
          <th>CON</th>
          <th>INT</th>
          <th>WIS</th>
          <th>CHA</th>
        </tr>
        <tr>
          <td>{{ modelValue.str }}&nbsp;({{ modelValue.strMod }})</td>
          <td>{{ modelValue.dex }}&nbsp;({{ modelValue.dexMod }})</td>
          <td>{{ modelValue.con }}&nbsp;({{ modelValue.conMod }})</td>
          <td>{{ modelValue.int }}&nbsp;({{ modelValue.intMod }})</td>
          <td>{{ modelValue.wis }}&nbsp;({{ modelValue.wisMod }})</td>
          <td>{{ modelValue.cha }}&nbsp;({{ modelValue.chaMod }})</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DndStats from "../../models/elements/dnd-stats";

export default {
  name: "DndStats",
  props: {
    modelValue: DndStats,
  },
};
</script>

<style scoped>
div {
  margin: 0.5rem;
}
</style>