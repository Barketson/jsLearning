function createForm(form, template) {
  form.className = "action";
  const table = document.createElement("table");
  const _storeTemplate = {
    tableRow: (slot1, slot2) =>
      `<tr>
          <td width="200" valign="top">${slot1}</td>
          <td valign="top">${slot2}</td>
      </tr>`,

    longtext: function(element) {
      return this.tableRow(element.label, `<input type="text" />`);
    },

    number: function(element) {
      return this.tableRow(element.label, `<input type="text" />`);
    },

    shorttext: function(element) {
      return this.tableRow(element.label, `<input type="text" />`);
    },

    combo: function(element) {
      const select = document.createElement("select");
      element.variants.forEach(val => {
        const option = document.createElement("option");
        option.value = val.value;
        option.innerHTML = `${val.text}`;
        select.appendChild(option);
      });

      return this.tableRow(element.label, select.outerHTML);
    },

    radio: function(element) {
      const td = document.createElement("td");
      element.variants.forEach(val => {
        const input = document.createElement("input");
        const label = document.createElement("label");
        input.value = val.value;
        input.type = "radio";
        input.name = "status";
        input.width = "600";
        label.innerHTML = val.text;
        label.appendChild(input);
        td.appendChild(label);
      });
      const computedStyle = getComputedStyle(td);
      computedStyle.alignLeft;
      return this.tableRow(element.label, td.outerHTML);
    },

    check: function(element) {
      return this.tableRow(element.label, `<input type="check" />`);
    },

    memo: function(element) {
      return this.tableRow(element.label, `<input type="text" />`);
    },

    submit: function(element) {
      return this.tableRow(element.label, `<input type="submit" />`);
    }
  };

  template.forEach(element => {
    table.innerHTML += _storeTemplate[element.kind](element);
    form.appendChild(table);
  });

  document.body.appendChild(form);
}
