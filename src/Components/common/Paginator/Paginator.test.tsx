import {create} from "react-test-renderer";
import {Paginator} from "./Paginator";

describe('Paginator component tests', () => {
    test('pages count is 11 but should be showed only 10', () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} currentPage={1} onPageChange={() => {}} />)

        const root = component.root
        const span = root.findAllByType('span')
        expect(span.length).toBe(10)
    })

    test('If pages count is more then 10 button NEXT should be present', () => {
        const component = create(<Paginator pageSize={1} currentPage={1} portionSize={10} totalItemsCount={11} onPageChange={() => {}} />)
        const root = component.root
        const button = root.findAllByType('button')
        expect(button.length).toBe(1)
    })
})