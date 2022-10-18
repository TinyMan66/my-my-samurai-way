import React from 'react';

type ProfileStatusProps = {}

export class ProfileStatus extends React.Component<ProfileStatusProps> {
    state = {
        editMode: false
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span></span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input/>
                    </div>
                }
            </div>
        );
    }
}
