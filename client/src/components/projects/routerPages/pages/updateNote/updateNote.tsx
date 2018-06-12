import * as React from 'react';

interface UpdateNoteProps {

}

interface UpdateNoteState {

}

class UpdateNote extends React.Component<UpdateNoteProps, UpdateNoteState> {
  public render(): JSX.Element {
    return (
      <div>
          <h1>Update Note</h1>
          <ul>
            <li>
              [Portfolio Renewal] : Current
              <ol>
                <li> Search Component </li>
                <li> Grid Component </li>
                <li> Router - Component Matching </li>
              </ol>
            </li>
          </ul>
          <ul>
            <li>
              [Instagram Desktop version] committed on 14-19 Mar
              <ol>
                <li> Line Component </li>
                <li> Tab Component </li>
                <li> Modal Component </li>
                <li> Button, Icon Button Component </li>
                <li> Input Component </li>
              </ol>
            </li>
          </ul>
          <ul>
            <li>
              [Instagram Desktop version] committed on 8 Mar
              <ol>
                <li> folder structure </li>
                <li> Image atom </li>
                <li> Image grid list </li>
              </ol>
            </li>
          </ul>
          <ul>
            <li>
              [Todo List Develop] committed on 19 Feb
              <ol>
                <li> action / reducer </li>
                <li> todo list component </li>
              </ol>
            </li>
          </ul>
          <ul>
            <li>
              [Redux Set] committed on 18 Feb
            </li>
          </ul>
          <ul>
            <li>
              [Component Develop] committed on 16 Feb
              <ol>
                <li> header component </li>
                <li> tab button component </li>
              </ol>
            </li>
          </ul>
          <ul>
            <li>
              [React Project Set] committed on 15 Feb
              <ol>
                <li> git ignore </li>
                <li> typescript </li>
                <li> jest </li>
                <li> react-router </li>
              </ol>
            </li>
          </ul>
      </div>
    );
  }
}

export default UpdateNote;
