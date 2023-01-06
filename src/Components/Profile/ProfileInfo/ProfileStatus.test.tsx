import TestRenderer, {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = TestRenderer.create(<ProfileStatus status={'it-incubator'} updateStatus={() => {
        }}/>)
        const instance = component.root.instance

        expect(instance.state.status).toBe('it-incubator')
    });

    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatus status={'it-incubator'} updateStatus={() => {
        }}/>)
        const root = component.root
        const span = root.findAllByType('span')

        expect(span.length).toBe(1)
    });

    test('after creation <input> shouldn\'t be displayed', () => {
        const component = create(<ProfileStatus status={'it-incubator'} updateStatus={() => {
        }}/>)
        const root = component.root

        expect(() => {
            root.findByType('input')
        }).toThrow()
    });

    test('after creation <span> should contains correct status', () => {
        const component = create(<ProfileStatus status={'it-incubator'} updateStatus={() => {
        }}/>)
        const root = component.root
        const span = root.findByType('span')

        expect(span.children[0]).toBe('it-incubator')
    });

    test('input should be displayed in editMode instead of span', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'it-incubator'} updateStatus={mockCallback}/>)
        const instance = component.root.instance
        instance.deactivateEditMode()

        expect(mockCallback.mock.calls.length).toBe(1)
    });
});