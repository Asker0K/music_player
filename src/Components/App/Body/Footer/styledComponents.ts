import styled from 'styled-components/macro';

export const FooterContainer = styled.div`
    height: 80px;
    display: flex;
    padding: 15px 15px;
    flex: 1 0;
    justify-content: space-between;
`;

export const LeftSideWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const LeftSideTitle = styled.p`
    margin: 0;
`;

export const MiddleSideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 500px;
`;

export const RightSideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 350px;
`;

export const RightSidebarInnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const MiddleSideInnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;