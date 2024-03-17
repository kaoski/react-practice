/* eslint-disable react/prop-types */
import { useState } from 'react';
import "./App.css";

const ENTITY = {
  FOLDER: "FOLDER",
  FILE: "FILE"
};


const folderStructure = [{
  type: ENTITY.FOLDER,
  name: "root",
  children:[
    {  type: ENTITY.FOLDER,
      name: "Pictures",
      children: [{type: ENTITY.FILE, name: "beach.jpg"},
      {type: ENTITY.FILE, name: "beach2.jpg"}, 
      {type: ENTITY.FILE, name: "beach3.jpg"}]}, 
      {
        type: ENTITY.FILE,
        name: "Videos"
      }
  ]
}];

function isNonEmptyFolder (folder) {
  return folder.type === ENTITY.FOLDER && folder.children.length > 0;
}

function FileIcon () {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"     className="w-6 h-6 text-yellow-500 inline">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
  );
}

function FolderIcon () {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500 inline">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
      </svg>
  );
}

function EntityForm ({entityType, handleAddEntity}) {

  const [entityName, setEntityName] = useState("");

  function handleKeyDown (ev) {
    if (ev.key === "Enter") {
      ev.preventDefault();
      handleAddEntity(entityType, entityName);
    }
  }

  function handleChange(ev) {
    setEntityName(ev.target.value);
  }

  return (
  <li>
    {entityType === ENTITY.FILE? <FileIcon/> : <FolderIcon/>}
    <input type="text" value={entityName} onChange={handleChange} onKeyDown={handleKeyDown}/>
  </li>);
}

function FileList ({folder}) {
  const [shouldShowChildren, setShouldShowChildren] = useState(false);
  const [children, setChildren] = useState(folder.children);
  const [entityToBeAdded, setEntityToBeAdded] = useState(null);
  // const shouldShowButtons = folder.type === ENTITY.FOLDER;

  function handleAddEntity(entityName, entityType) {
    const newChildren = {name: entityName, type: entityType};
    if (entityType === ENTITY.FOLDER) {
      newChildren.children = [];
    }
    setChildren([...children, newChildren]);
    setEntityToBeAdded(null);
  }

  return (
    <li className='ml-4'>
      <div onClick={() => setShouldShowChildren(shouldShowChildren => !shouldShowChildren)}>
        {folder.type === ENTITY.FILE? <FileIcon/> : <FolderIcon/>}
        <span>{folder.name}</span>
      </div>

        {/* {shouldShowButtons &&
        <>
          <button onClick={() => setEntityToBeAdded(ENTITY.FOLDER)}>Add Folder</button>
          <button onClick={() => setEntityToBeAdded(ENTITY.FOLDER)}>Add File</button>
        </>
        }  */}
        {shouldShowChildren && isNonEmptyFolder(folder) && (
          <ul>
            {entityToBeAdded && <EntityForm handleAddEntity={handleAddEntity} entityType={entityToBeAdded}/>}
            {
               folder.children.map(child => <FileList key={child.name} folder={child}/>)
            }
          </ul>
        )}
    </li>
  );
}

export default function App() {
  const folders = folderStructure;
  return <div className="App">
    <ul>
      {folders.map((folder) => <FileList key={folder.name} folder={folder}/>)}
    </ul>
  </div>;
}

