import { Outlet } from "react-router-dom";
import searchWhite from "../../assets/searchWhite.svg";
import RadioButton from "../../components/Buttons/RadioButton.jsx";
import TextInput from "../../components/TextInput/TextInput.jsx";
import HeaderLine from "../../components/SectionHeaderline/HeaderLine.jsx";
import FooterButtonAdd from "../../components/Buttons/FooterButtonAdd.jsx";
import React, { useState } from "react";
import { helpTextAdd } from "../../utils/helpText.js";
import Checkbox from "../../components/Checkbox/Checkbox.jsx";
import PermissionModal from "../../modals/Permissions.jsx";
export default function Add() {
  const [permissions, setPermissions] = useState({
    user: { read: false, write: false, execute: false },
    group: { read: false, write: false, execute: false },
    others: { read: false, write: false, execute: false },
  });
  const handlePermissionChange = (entity, permission) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [entity]: {
        ...prevPermissions[entity],
        [permission]: !prevPermissions[entity][permission],
      },
    }));
  };

  const handleSubmit = () => {
    // Here you can handle the submission of the selected permissions
    console.log('Selected Permissions:', permissions);
    // Close the modal or perform other actions
  };
  const [options, setOptions] = useState([
    { label: 'Read only', name: 'read' },
    { label: 'Inherit ACLs', name: 'inherit' },
    { label: 'Utilize Btfrs Features', name: 'utilize' }
  ]);
  const handleCheckboxChange = (name, isChecked) => {
    // Update options array with the new checked state
    setOptions(options.map((option) =>
      option.name === name ? { ...option, checked: isChecked } : option
    ));
  };
  return (
    <>
      <section className="space-y-4 mt-14 py-14 px-10 bg-white h-screen justify-start items-start">
        <HeaderLine text="New Share" />
        <section className="mx-52 px-56 space-y-1 font-roboto text-base">
          <h3 className="font-medium">Identification</h3>
            <TextInput label="Share Name" />
            <TextInput label="Share Description"/>
            <section className="flex ml-6">
              <label>Share Type</label>
              <div className="px-5">
              <RadioButton id= "optprint" name = "shrtyp" label = "Printer"/>
              <RadioButton id= "optdirec" name = "shrtyp" label = "Directory"/>
              </div>
            </section>
            <div className="flex space-x-2">
              <TextInput label="Share Path"/>
              <button className="bg-customHover items-center justify-center flex rounded w-8 h-8">
                <img src={searchWhite} alt="Filtro" className="w-6 h-6 opacity-none"/>
              </button>
            </div>
            <div className="px-12 space-y-1">
            {options.map((option) => (
              <Checkbox
                key={option.name} // Important for performance with dynamic lists
                label={option.label}
                name={option.name}
                checked={option.checked}
                onChange={(isChecked) => handleCheckboxChange(option.name, isChecked)}
              />
            ))}
            </div>
            <br />
          <h3 className="font-medium">Permisssions</h3>  
              <div className="pt-2 pb-3 pr-8 pl-8 w-96 flex justify-center">
                <table>
                  <thead>
                    <tr>
                      <th className="px-2"></th>
                      <th className="px-2">Read</th>
                      <th className="px-2">Write</th>
                      <th className="px-2">Execute</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-1">
                    {Object.entries(permissions).map(([entity, perms]) => (
                      <tr key={entity} className="w-10">
                        <td className="text-center">{entity.charAt(0).toUpperCase() + entity.slice(1)}</td>
                        {Object.entries(perms).map(([permission, value]) => (
                          <td className="w-4 text-center" key={permission}>
                            <input
                              className='w-4'
                              type="checkbox"
                              checked={value}
                              onChange={() => handlePermissionChange(entity, permission)}
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
        </section>
      </section>
      <FooterButtonAdd title={helpTextAdd.title} description={helpTextAdd.description}/>
    </>
  );
}
